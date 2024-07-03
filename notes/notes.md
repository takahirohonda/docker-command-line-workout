# Notes

## 1. `COPY` vs `ADD` in Dockerfile

he two commands `COPY` and `ADD` do very similar things with a few key differences. `ADD` can also accept, in addition to local files, URLs to download things off the Internet and it will also automatically unzip any tar files it downloads or adds. `COPY` will just copy local files. Use `COPY` unless you need to unzip something or are downloading something.
