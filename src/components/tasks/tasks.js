export default function TasksComponent( { task, index, remove } ) {
  return (
    <tr key={index}>
        <th>{task}</th>
        <th>
          <button className="hover:bg-green-400 " >
            modificar
          </button>
          <button className="hover:bg-red-400 " onClick={ ()=> remove(task) } >
            <svg  width="20" height="20" viewBox="0 -0.5 21 21" xmlns="http://www.w3.org/2000/svg"><path d="M7.35 16h2.1V8h-2.1v8Zm4.2 0h2.1V8h-2.1v8Zm-6.3 2h10.5V6H5.25v12Zm2.1-14h6.3V2h-6.3v2Zm8.4 0V0H5.25v4H0v2h3.15v14h14.7V6H21V4h-5.25Z" fill="#fff" fill-rule="evenodd"/></svg>
          </button>
        </th>
    </tr>
  )
}
