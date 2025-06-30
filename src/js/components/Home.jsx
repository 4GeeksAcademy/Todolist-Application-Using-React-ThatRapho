import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



//create your first component
const TodoList = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="mt-5 d-flex justify-content-center">
			<div className="p-4 bg-light border border-0 rounded" id="ToDoModal">
				<h4 className="pt-1 pb-2 mb-4">ToDo List</h4>
				<form className="d-flex mb-4">
					<input
						type="text" autoFocus
						className="form-control me-2 border-dark-subtle"
						placeholder="Add your new task"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								if (inputValue.trim() === "") return;
								setTodos([...todos, inputValue]);
								setInputValue("");
							}
						}}
					/>						
					<button type="button" onClick={() => setTodos(todos.concat(inputValue), setInputValue(""))} className="btn text-light" style={{ fontSize: "2em", lineHeight: "1" }}><FontAwesomeIcon icon={faPlus} /></button>
				</form>
				<ul className="list-group">
					{todos.map((entry, index) =>
						<li key={index} className="list-group-item mb-2 rounded-0 border-0 d-flex align-items-center p-0" style={{ height: "5vh" }}>
							<span className="flex-grow-1 ps-3">{entry}</span>
							<button
								type="button"
								className="btn btn-danger rounded-0 h-100 trash" style={{ width: "5vh" }} onClick={() => {
									const newTodos = [
										...todos.slice(0, index),
										...todos.slice(index + 1)
									];
									setTodos(newTodos);
								}}
							>
								<FontAwesomeIcon icon={faTrash} />
							</button>
						</li>
					)}
				</ul>

				<div className="d-flex mt-4 justify-content-between">
					<p className="pt-2">You have {todos.length} pending tasks.</p>
					<button type="button" onClick={() => setTodos([])} className="btn text-light h-50">Clear All</button>
				</div>
			</div>
		</div>
	);
};

export default TodoList;

