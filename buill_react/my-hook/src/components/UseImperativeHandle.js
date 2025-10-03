import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from '../videos/video1.mp4' 

function VideoHanld(props, ref){
     const videoRef = useRef(null)

     useImperativeHandle(ref, ()=>({
         play(){
              videoRef.current && videoRef.current.play()
         },
         pause(){
              videoRef.current && videoRef.current.pause()
         },
         
         // PHƯƠNG THỨC MỚI: Thiết lập âm lượng (giá trị từ 0.0 đến 1.0)
         setVolume(volume){
             if (videoRef.current) {
                 videoRef.current.volume = volume;
             }
         },
         
         // PHƯƠNG THỨC MỚI: Lấy âm lượng hiện tại
         getVolume(){
             return videoRef.current ? videoRef.current.volume : 0;
         }
         
     }))

     return(
          <video
          ref={videoRef}
          src={video1} 
          width={230}
          // Bỏ thuộc tính controls để không hiển thị UI mặc định
          // Bạn có thể thêm muted nếu muốn video không có tiếng khi load
          />
     )
}

export default forwardRef(VideoHanld)