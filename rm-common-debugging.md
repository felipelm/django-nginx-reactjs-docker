# List of Common Debugging

 * Cannot use VM on windows 10 and Docker at the same time
 * Cannot VPN into network and use Docker (nginex crashes) when working remotely
 * Cannot execute 'docker exec' command in git bash

 ## Debugging '...\r'

 Open '.gitattributes'

 Add '<file_pattern> -crlf'

 Commit '.gitattributes'

 Open file in question in notepad++

 Open Find+Replace dialog

 Repalce '\r' with ''. Make sure that 'Search Mode' is in 'Extended mode'

 i.e.

' /usr/bin/env: ‘python\r’: No such file or directory' in error message

Open '.gitattributes'

Add '*.py -crlf'

Commit, replace in notepad++
