import InfoBlock from "@/app/components/InfoBlocks/InfoBlock";
import styles from './infoBlocks.module.scss';

interface Props {
  infoBlocks: any[];
}

function InfoBlocks({infoBlocks}: Props) {
  return <div className={styles.infoBlocks}>
    <div className={styles.infoBlocksInner}>
      {infoBlocks.map((infoBlock, i) => {
        return <>
          <div className={styles.separatorLine}/>
          <InfoBlock
            key={`${infoBlock.title}-${i}`}
            type={infoBlock.type}
            icon={infoBlock.icon}
            title={infoBlock.title}
            img={infoBlock.img}
            subtitle={infoBlock.subtitle}
            description={infoBlock.description}
            actionBtnTxt={infoBlock.actionBtnTxt}
          />
        </>
      })}
    </div>
  </div>
}

export default InfoBlocks;