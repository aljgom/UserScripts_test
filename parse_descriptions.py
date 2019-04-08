"""
Creates a table with the metadata of each of the userscripts,
then uses that table to merge it into the README file
"""
import os
import re


def escape(text):
    """ Escapes markdown characters """
    chars = "\\`*_{}[]()#+-.!>~"
    for c in chars:
        text = text.replace(c, "\\" + c)
    return text


def parse_file(path, file_name, output):
    """ Prints the name, description, and match patterns of the userscript """
    lines = [line.rstrip('\n') for line in open(path + file_name)]

    match = ''
    for line in lines:
        if re.match("// ==/UserScript==", line):
            break

        # this would print them line by line
        # if re.match("// ( |@(name|match|description)) ", line):
        #     output.write(line[4:] + '\n')

        # write a row for a markdown table
        if "// @name " in line:
            name = escape(line).split(' ', 2)[2].lstrip()           # remove first 2 'words'
            current = 'name'

        if "// @description" in line:
            description = escape(line).split(' ', 2)[2].lstrip()    # remove first 2 'words'
            current = 'description'

        if "// @match" in line:
                                                                    # add break starting with second line
            match += ('' if match == '' else '<br>') + \
                     "``" + line.split(' ', 2)[2].lstrip()  + "``"  # remove first 2 'words'
            current = 'match'

        if "//   " in line:
            line = escape(line).split(' ', 1)[1].lstrip()           # remove first 'word'
            if current == 'name':
                name += '<br>' + line
            if current == 'description':
                description += '<br>' + line
            if current == 'match':
                match += '<br>' + line

    branch = 'master' if path == './' else path
    # output.write("| {} | {} | {} | {} |\n".format(name, description, match, file_name))
    # source: github.com/aljgom/UserScripts/blob/master/airbnb.user.js
    # install: aljgom.github.io/master/airbnb.user.js
    output.write(f"| **testtest{name}**<br>[{file_name}](../{branch}/{file_name} \"{name}\") | {description}<br>_Match:_<br>{match}\n")




def create_table(path):
    """ Read files, and parse the ones that match user.js """
    # Save the result in _preview_table.md
    with open(path + '_preview_table.md', 'w') as output:
        output.write('| Name / File | Description / Match |\n')
        output.write('|---|---|\n')
        for file_name in os.listdir(path):
            if "user.js" in file_name:
                parse_file(path, file_name, output)


def merge_readme(path):
    """ Merge _readme.md and _preview_table.md into README.md """
    file_names = ['_readme.md', '_preview_table.md']
    with open(path + 'README.md', 'w') as outfile:
        outfile.write('<!-- \n\n\n\n\n\n **DO NOT EDIT THIS FILE.** Make changes to `_readme.md`, ' +
                      'and that will be used to create this file -->\n\n\n\n\n\n')
        for f_name in file_names:
            with open(path + f_name) as infile:
                outfile.write(infile.read())
            outfile.write("\n")


create_table('./')
merge_readme('./')
create_table('old/')
merge_readme('old/')
