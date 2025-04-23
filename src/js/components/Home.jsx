import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div
			className="container py-5"
			style={{
				maxWidth: "600px",
				fontFamily: "'Segoe UI', sans-serif",
				color: "#333",
			}}
		>
			<h2 className="text-center mb-4 fw-light" style={{ color: "#222" }}>
				My Tasks
			</h2>

			<div className="mb-4">
				<input
					className="form-control border-0 border-bottom rounded-0 px-1"
					style={{
						boxShadow: "none",
						borderColor: "#ccc",
						fontSize: "1.1rem",
					}}
					type="text"
					placeholder="What do you need to do?"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyUp={(e) => {
						if (e.key === "Enter" && inputValue.trim() !== "") {
							const newTodos = todos.concat(inputValue.trim());
							setTodos(newTodos);
							console.log("Current todos:", newTodos);
							setInputValue("");
						}
					}}
				/>
			</div>

			<ul className="list-group list-group-flush">
				{todos.map((t, index) => (
					<li
						key={index}
						className="list-group-item d-flex justify-content-between align-items-center px-0 py-2"
						style={{
							borderBottom: "1px solid #eee",
							backgroundColor: "transparent",
						}}
					>
						<span style={{ fontSize: "1rem" }}>{t}</span>
						<FontAwesomeIcon
							icon={faTrashAlt}
							className="text-secondary"
							style={{
								cursor: "pointer",
								transition: "color 0.2s ease-in-out",
							}}
							onMouseOver={(e) => (e.currentTarget.style.color = "#dc3545")}
							onMouseOut={(e) => (e.currentTarget.style.color = "#6c757d")}
							onClick={() => {
								const newTodos = todos.filter((_, i) => i !== index);
								setTodos(newTodos);
								console.log("Todo removed. Current todos:", newTodos);
							}}
						/>
					</li>
				))}
			</ul>

			<div className="text-end text-muted mt-3" style={{ fontSize: "0.9rem" }}>
				{todos.length > 0
					? `${todos.length} ${todos.length === 1 ? "task" : "tasks"}`
					: "No tasks yet."}
			</div>
		</div>
	);
};

export default Home;
