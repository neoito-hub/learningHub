# Shell

The shell is the thing that stares at you when you open up a terminal
on your machine. It usually looks like

```
user@ntpl-lap-206 ~$
```

We type in commands and we get the output. A good shell environment, is
configured for you, when you install the config files
from [neoito-hub](https://github.com/neoito-hub/dotfiles).



## Adding to $PATH

The `$PATH` variable stores the list locations where the shell looks for binaries.
Do a `$ which ls`. The output should be `/bin/ls`. Do an `$ echo $PATH` on
the terminal.

So, if we want to add binaries/executables in a particular folder
(example: `/home/akts/Programs/mongodb/bin`),
to the `$PATH` variable, execute
```
export PATH="$HOME/Programs/mongodb/bin:$PATH"
```

## Environment Variables

To figure out what shell we're using, do a `$ echo $SHELL`. If we're running
`bash`, the file to set environment variables will the `$HOME/.bash_profile`. For
`zsh`, it'd be `$HOME/.zprofile`

Here's an excrept from a sample `.bash_profile` file.
```
export GOPATH="$HOME/go"
export GOROOT="$HOME/Programs/go"
export PATH="$PATH:$GOROOT/bin"
```

## CLI Cheatsheet

### System information
```
# Display Linux system information
uname -a

# Display kernel release information
uname -r

# Display Linux system information
uname -a

# Display kernel release information
uname -r

# Show all network interfaces
ip a
```

### Monitoring
```
# Display and manage the top processes
top

# Interactive process viewer (top alternative) - sudo apt install htop
htop

# Capture and display all packets on interface eth0
tcpdump -i eth0

# Monitor all traffic on port 80 ( HTTP )
tcpdump -i eth0 'port 80'
```

### User Management
```
# Add the akts account to the docker group
usermod -aG docker akts

```
### File and directories

```
# List all files in a long listing (detailed) format
ls -al

# Display the present working directory
pwd

# Create a directory
mkdir directory

# Remove (delete) file
rm file

# Remove the directory and its contents recursively
rm -r directory

# Force removal of file without prompting for confirmation
rm -f file

# Forcefully remove directory recursively
rm -rf directory

# Copy file1 to file2
cp file1 file2

# Copy source_directory recursively to destination. If destination exists, copy source_directory into destination, otherwise create destination with the contents of source_directory.
cp -r source_directory destination

# Rename or move file1 to file2. If file2 is an existing directory, move file1 into directory file2
mv file1 file2

# Create symbolic link to linkname
ln -s /path/to/file linkname

# Create an empty file or update the access and modification times of file.
touch file

# View the contents of file
cat file

# Browse through a text file
less file

# Display the first 10 lines of file
head file

# Display the last 10 lines of file
tail file

# Display the last 10 lines of file and "follow" the file as it grows.
tail -f file
```

### Process Management
```
# Display your currently running processes
ps

# Display all the currently running processes on the system.
ps -ef

# Display process information for processname
ps -ef | grep processname

# Display and manage the top processes
top

# Interactive process viewer (top alternative)
htop

# Kill process with process ID of pid
kill pid

# Kill all processes named processname
killall processname

# Start program in the background
program &

# Display stopped or background jobs
bg

# Brings the most recent background job to foreground
fg

# Brings job n to the foreground
fg n
```

### Archiving

```
# Create tar named archive.tar containing directory.
tar cf archive.tar directory

# Extract the contents from archive.tar.
tar xf archive.tar

# Create a gzip compressed tar file name archive.tar.gz.
tar czf archive.tar.gz directory

# Extract a gzip compressed tar file.
tar xzf archive.tar.gz

# Create a tar file with bzip2 compression
tar cjf archive.tar.bz2 directory

# Extract a bzip2 compressed tar file.
tar xjf archive.tar.bz2
```

### Installing packages
```
# Install software from source code.
tar zxvf sourcecode.tar.gz
cd sourcecode
./configure
make
make install

# For .deb files, use the dpkg tool with root privilleges
sudo dpkg -i file.deb
```

The above list is taken directly from [lta](https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/).

