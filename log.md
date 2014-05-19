0326
=======
HPC:
/mnt/scratch/tg/qingpeng/2014-virus-meta

[qingpeng@gateway-00 2014-virus-meta]$ more cp.sh
cp /mnt/scratch/kimyise2/final/QC/AB/AB.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/BB/BB.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/BH/BH.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/IB/IB.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/IH/IH.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/MB/MB.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/MH/MH.tr.fq.trimmed ./
cp /mnt/scratch/kimyise2/final/QC/PB/PB.tr.fq.trimmed ./


bash qsub.sh


run load-counting.py



1.normalize 之后再做
2. 整合起来之后再做

基于IGS来做




目前0.1，之后再细化，方法，优化
多小可以


0.1

median kmer

