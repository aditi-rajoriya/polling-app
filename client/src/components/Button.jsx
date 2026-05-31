export default function Button(props) {
    return (
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
            {props.text}
        </button>
    );
}