
export interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

const TableList = ({ expenses, onDelete }: Props) => {
    if (expenses.length < 1) return (
        <></>
    )
    return (
        <div className="mt-3">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses?.map(e => (
                        <tr key={e.id}>
                            <td>{e.description}</td>
                            <td>{e.amount.toFixed(2)}</td>
                            <td>{e.category}</td>
                            <td><button onClick={() => onDelete(e.id)} className="btn btn-outline-danger"> Delete </button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>${expenses?.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TableList