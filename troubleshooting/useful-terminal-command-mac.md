## Useful Terminal Commands for trouble shooting (Mac)

### (1) Find which port is currently active in the local machine

```bash
netstat -anvp tcp | awk 'NR<3 || /LISTEN/'
```
