import { useTime } from 'react-timer-hook';
import './styles/Timer.css';

function Timer() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour', interval: 20 });

  return (
    <div className="timer-container">
      <div className="timer-display">
        <span className="time-part">{String(hours).padStart(2, '0')}</span>:
        <span className="time-part">{String(minutes).padStart(2, '0')}</span>:
        <span className="time-part">{String(seconds).padStart(2, '0')}</span>
        <span className="ampm">{ampm}</span>
      </div>
    </div>
  );
}

export default Timer;
