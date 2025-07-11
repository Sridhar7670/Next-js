
import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import styles from "./styles.module.css"
export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.module}>{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className={styles.photo}
        />
        <div className={styles.info}>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>


    </div>
  );
}
