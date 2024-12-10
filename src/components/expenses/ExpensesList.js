import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <p className="expenses-list__fallback">No expenses found.</p>;
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expense) => (
                <ExpenseItem 
                    key={expense.id} 
                    date={expense.date} 
                    title={expense.title} 
                    price={expense.price} 
                />
            ))}
        </ul>
    );
};

export default ExpensesList;