// ... các import khác ...
import { useRef, useState } from 'react'; // Cần import useState để theo dõi giá trị âm lượng
import VideoHanld from './UseImperativeHandle';

function IndexImperativateHandle() {
  const videoRef = useRef(null)
  // Khởi tạo state để theo dõi và hiển thị giá trị âm lượng (mặc định là 1.0)
  const [volume, setVolumeState] = useState(1); 

  const handlePlay = () => {
    if (videoRef.current && typeof videoRef.current.play === 'function') {
        videoRef.current.play()
    }
  }

  const handlePause = () => {
    if (videoRef.current && typeof videoRef.current.pause === 'function') {
        videoRef.current.pause()
    }
  }
  
  // HÀM MỚI: Xử lý thay đổi thanh trượt âm lượng
  const handleVolumeChange = (e) => {
      // Giá trị từ input range là string, chuyển sang number
      const newVolume = parseFloat(e.target.value); 
      
      // 1. Cập nhật state (để hiển thị giá trị hoặc re-render)
      setVolumeState(newVolume);
      
      // 2. Gọi phương thức setVolume() đã được tiếp xúc để điều khiển video
      if (videoRef.current && typeof videoRef.current.setVolume === 'function') {
          videoRef.current.setVolume(newVolume);
      }
  };

  return (
    <div className="IndexImperativateHandle">
      {/* ... các phần khác ... */}
      
      <hr/>
      <h1> Use ImperativeHandle</h1>
      <p>
        <div>
          <VideoHanld ref={videoRef}/>
          
          {/* Nút Play/Pause cũ */}
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
          
          <br/>
          
          {/* THANH ĐIỀU KHIỂN ÂM LƯỢNG TÙY CHỈNH */}
          <div style={{ marginTop: '10px' }}>
              <label htmlFor="volume-slider">Volume: {Math.round(volume * 100)}%</label>
              <input
                  id="volume-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01" // Điều chỉnh độ nhạy
                  value={volume} // Liên kết với state volume
                  onChange={handleVolumeChange}
                  style={{ marginLeft: '10px' }}
              />
          </div>
          
        </div>
      </p>

    </div>
  );
}

export default IndexImperativateHandle;