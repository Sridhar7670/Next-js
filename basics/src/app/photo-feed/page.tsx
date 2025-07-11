import Image from 'next/image';
import Link from 'next/link';
import './styles.modules.css';
import wondersImages from './wonders';

export default function PhotoFeed() {
  return (
    <main className="container">
      <h1 className="title">New Wonders of the World</h1>
      <div className="grid">
        {wondersImages.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            
              <Image
                alt={name}
                src={src}
                width={500}
                height={500}
                className="image"
              />
            
          </Link>
        ))}
      </div>
    </main>
  );
}
