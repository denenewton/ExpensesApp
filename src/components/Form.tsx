import categories from "./category";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";



const schema = z.object({
    description: z.string().min(3, { message: 'Description must contain at least 3 characters' }).max(50),
    amount: z.number({ invalid_type_error: 'Amount is required.' }).min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({ message: 'Category is required.' })
    })
})

export type FormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: FormData) => void
}

const Form = ({ onSubmit }: Props) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

    return (

        <form onSubmit={handleSubmit(data => {
            onSubmit(data)
            reset()
        })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id='description' type="text" className="form-control" />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb-3"><label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', { valueAsNumber: true })} id='amount' type="text" className="form-control" />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select  {...register('category')} id="category" className="form-select">
                    <option value=""></option>
                    {categories.map((category, index) => (<option key={index} value={category}>{category}</option>))}
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>

    )
}

export default Form;


