export default function Button({ onClick }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '35px',
      }}
    >
      <button
        className="Button"
        type="click"
        onClick={() => {
          onClick();
        }}
      >
        Load more
      </button>
    </div>
  );
}
