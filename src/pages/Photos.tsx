import { useState, useEffect } from "react";
import "./Page.css";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, you'd fetch this from an API or file system
    // For now, we'll use a simple approach to get photo filenames
    const photoList = [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
      "photo6.jpg",
      "photo7.jpg",
      "photo8.jpg",
      "photo9.jpg",
    ];
    setPhotos(photoList);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedPhoto) {
        setSelectedPhoto(null);
      }
    };

    if (selectedPhoto) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  const openOverlay = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const closeOverlay = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Photos</h1>
        <div className="page-body">
          <p>
            A very amateur photographer with a Ricoh GR IIIx — honestly, my
            iPhone shots usually come out better. See more on Instagram:{" "}
            <a
              href="https://www.instagram.com/evphotoblurbs"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              @evphotoblurbs
            </a>
            .
          </p>
          <div className="photos-grid">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="photo-item"
                onClick={() => openOverlay(photo)}
              >
                <img
                  src={`/photos/${photo}`}
                  alt={`Photography ${index + 1}`}
                  className="photo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPhoto && (
        <div className="photo-overlay" onClick={closeOverlay}>
          <div className="overlay-content">
            <button className="close-button" onClick={closeOverlay}>
              ×
            </button>
            <img
              src={`/photos/${selectedPhoto}`}
              alt="Selected photo"
              className="overlay-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
