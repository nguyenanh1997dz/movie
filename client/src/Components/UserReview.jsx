export const Message = ({ label, placeholder, name, register }) => {
    return (
      <div className="text-sm w-full">
        <label className="text-border font-semibold">{label}</label>
        <textarea
          className="w-full h-40 mt-2 p-6 bg-main border border-border rounded"
          placeholder={placeholder}
          {...register}
          name={name}
        ></textarea>
      </div>
    );
  };
  
  export const Select = ({ label, options, register, name }) => {
    return (
      <>
        <label className="text-border font-semibold">{label}</label>
        <select
          className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded"
          {...register}
          name={name}
        >
          <option value="" disabled selected>
          Select
        </option>
          {options.map((o) => (
            <option key={o?._id} value={o?._id}>
              {o?.name}
            </option>
          ))}
        </select>
      </>
    );
  };