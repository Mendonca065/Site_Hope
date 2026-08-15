// src/components/sections/VideoRun.tsx
import videoPromo from '../../assets/videos/hope-video.mp4';

export function VideoRun() {
  return (
    <section className="w-full bg-[#F2A900] py-16 md:py-32 flex justify-center items-center">
      <div className="w-full max-w-5xl px-4 md:px-8">
        <div className="w-full aspect-video bg-[#FF6B2B] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] relative">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            src={videoPromo} 
          />
        </div>
      </div>
    </section>
  );
}