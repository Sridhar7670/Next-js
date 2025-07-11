import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        style={{
          width: "100%",
          objectFit: "cover",
          aspectRatio: "1 / 1",
          height:"50vh"
        }}
      />

      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.25rem",
          }}
        >
          {photo.name}
        </h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}


// import Image from "next/image";
// import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
// import Modal from "@/components/modal";

// const styles = {
//   image: {
//     width: "100%",
//     objectFit: "cover",
//     aspectRatio: "1 / 1",
//   },
//   container: {
//     backgroundColor: "white",
//     padding: "1rem",
//   },
//   title: {
//     fontSize: "1.25rem",
//     fontWeight: 600,
//     marginBottom: "0.25rem",
//   },
// };

// export default async function PhotoModal({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

//   return (
//     <Modal>
//       <Image
//         alt={photo.name}
//         src={photo.src}
//         style={styles.image}
//       />

//       <div style={styles.container}>
//         <h2 style={styles.title}>{photo.name}</h2>
//         <h3>{photo.photographer}</h3>
//         <h3>{photo.location}</h3>
//       </div>
//     </Modal>
//   );
// }

