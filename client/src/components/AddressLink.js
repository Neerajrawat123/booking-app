export default function AddressLink({ children, className = null }) {
  if (!className) {
    className = "my-3 block";
  }
  className += "flex gap-1 font-semibold underline";
  return <div className="text-2xl font-bold">{children}</div>;
}
