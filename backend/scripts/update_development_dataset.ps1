sanity dataset export production ./production.tar.gz

sanity dataset import ./production.tar.gz development --replace

rm ./production.tar.gz
