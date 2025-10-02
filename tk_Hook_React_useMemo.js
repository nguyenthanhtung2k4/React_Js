import React, { useState, useMemo } from 'react';

// Hàm mô phỏng phép tính nặng (Giữ nguyên)
const calculateExpensiveValue = (num) => {
  console.log('*** ✅ Tính toán lại giá trị TỐN KÉM (CHỈ KHI CẦN)... ***');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

function OptimizedParentComponent() {
  const [count, setCount] = useState(0);
  const [inputNumber, setInputNumber] = useState(10);

  const expensiveValue = useMemo(() => {
    return calculateExpensiveValue(inputNumber);
  }, [inputNumber]); 
  
  return (
    <div>
      {/* Nút này vẫn gây re-render */}
      <button onClick={() => setCount(count + 1)}>
        Tăng Count (SẼ KHÔNG GÂY LAG): {count}
      </button>

      <p>Giá trị Tốn kém: {expensiveValue}</p>
      <p>Giá trị đầu vào: {inputNumber}</p>
      
      {/* Nút này thay đổi dependency của useMemo, sẽ kích hoạt tính toán lại */}
      <button onClick={() => setInputNumber(prev => prev + 10)}>
        Tăng Input Number (GÂY TÍNH TOÁN LẠI)
      </button>
    </div>
  );
}