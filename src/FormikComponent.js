import { useFormik } from "formik";
import "./Formik.css";
import * as Yup from 'yup';


function FormikComponent() {
  //Holds fields for profession field
  const professions = [
    "Designer",
    "Developers",
    "Data Science",
    "ML engineer",
    "DevOps",
    "Blockchain",
    "React",
  ];

  //Initiate the formik form
  const formik = useFormik({
    //Define the structure of the form
    initialValues: {
      name: "",
      email: "",
      profession: "",
      age: "",
    },
    //what happens when the form is submitted
    onSubmit: function (values) {
      console.log(values);
    },
    validationSchema:Yup.object({
      name:Yup.string().required('Full Name is required').matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed"),
      email:Yup.string().email("Please enter a valid email").required(),
      profession:Yup.string().required(),
      age:Yup.number().min(15,'You need to be older than 15 years').max(70,'You need to be less than 70 years old.').required()
    })
  });

  return (
    <div className="form-holder">
      <form onSubmit={formik.handleSubmit}>
        {/* For Name */}
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className={`${formik.touched.name && formik.errors.name ? 'red-border': 'grey-border'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          name="name"
          id="name"
        />
        {/* Error For Name  */}
        {formik.touched.name && formik.errors.name && (
          <span className="error">{formik.errors.name}</span>
        )}
        {/* For Email  */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={`${formik.touched.email && formik.errors.email ? 'red-border': 'grey-border'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
          id="email"
        />
         {/* Error For Email  */}
         {formik.touched.email && formik.errors.email && (
          <span className="error">{formik.errors.email}</span>
        )}

        {/* For Profession  */}
        <label htmlFor="profession">Profession</label>
        <select
          name="profession"
          id="profession"
          className={`${formik.touched.profession && formik.errors.profession ? 'red-border': 'grey-border'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.profession}
        >
          <option value="">Select A Profession</option>
          {professions.map((profession, index) => {
            return (
              <option value={profession} key={index}>
                {profession}
              </option>
            );
          })}
        </select>

        {formik.touched.profession && formik.errors.profession && (
          <span className="error">{formik.errors.profession}</span>
        )}

        {/* For Age  */}
        <label htmlFor="age">Age</label>
        <input
          type="text"
          className="grey-border"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          name="age"
          id="age"
        />

        {/* //Submit Button  */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormikComponent;
