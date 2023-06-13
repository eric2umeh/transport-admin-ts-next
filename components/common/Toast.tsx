import React from 'react';

interface ToastProps {
  show: boolean;
  onClose: () => void;
  message: string;
  delay?: number;
}

const Toast: React.FC<ToastProps> = ({
  show,
  onClose,
  message,
  delay = 3000,
}) => {
  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (show) {
      timer = setTimeout(() => {
        onClose();
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [show, onClose, delay]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
        maxWidth: '60%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#8a8d8a',
          color: '#fff',
          borderRadius: '4px',
          padding: '8px',
        }}
      >
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          style={{
            marginLeft: '8px',
            border: 'none',
            backgroundColor: '#fff',
            color: '#fff',
          }}
        ></button>
      </div>
    </div>
  );
};

export default Toast;
