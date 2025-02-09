
export default function Button({
  title,
  process,
  onclick,
  disabled,
  className
}: {
  title: string;
  disabled?: boolean;
  process: string;
  className: string;
  onclick: () => void;
}) {

  
  return (
    <button disabled={disabled} className={className} onClick={onclick}>
      <div>
        <p>{title}</p>
      </div>
    </button>
  );
}
