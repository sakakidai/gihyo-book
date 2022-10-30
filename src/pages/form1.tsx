import { useForm, SubmitHandler } from 'react-hook-form'

type MyFormData = {
  firstName: string
  lastName: string
  category: string
}

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormData>()

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true })} placeholder='名前' />
        {errors.firstName && <div>名前を入力してください</div>}
        <input {...register('lastName', { required: true })} placeholder='苗字' />
        {errors.lastName && <div>苗字を入力してください</div>}
        <select {...register('category', { required: true })}>
          <option value=''>選択...</option>
          <option value='A'>カテゴリーA</option>
          <option value='B'>カテゴリーB</option>
        </select>
        {errors.category && <div>カテゴリーを選択してください</div>}
        <input type='submit' />
      </form>
    </div>
  )
}

export default Form1
