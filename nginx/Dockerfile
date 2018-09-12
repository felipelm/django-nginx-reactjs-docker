FROM nginx:latest

# Make /var/cache/nginx/ writable by non-root users
RUN chgrp nginx /var/cache/nginx/
RUN chmod -R g+w /var/cache/nginx/

# Run as port 7070, which is available to non-root users allows us to drop
# all remaining root capabilities from the container, which improves security.
RUN sed --regexp-extended --in-place=.bak 's%(^\s+listen\s+)80(;)%\17070\2%' /etc/nginx/conf.d/default.conf
EXPOSE 7070

# Write the PID file to a location where regular users have write access.
RUN sed --regexp-extended --in-place=.bak 's%^pid\s+/var/run/nginx.pid;%pid /var/tmp/nginx.pid;%' /etc/nginx/nginx.conf

USER nginx