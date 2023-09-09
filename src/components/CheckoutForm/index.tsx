import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  return (
    <div className={styles.form_container}>
      <form
        className={styles.form_control}
        onSubmit={handleSubmit((data) => console.log(data, "form data"))}
      >
        <div className={styles.row}>
          <div className={styles.column}>
            <label>First Name</label>
            <input {...register("firstName", { required: true })} />
          </div>
          <div className={styles.column}>
            <label>Last Name</label>
            <input {...register("lastName")} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>Email</label>
            <input {...register("email", { required: true })} />
          </div>
          <div className={styles.column}>
            <label>Phone Number</label>
            <input
              {...register("phoneNumber", {
                required: true,
                maxLength: 12,
                pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
              })}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>Write your message here</label>
            <input
              className={styles.message_input}
              {...register("message", {
                required: true,
              })}
            />
          </div>
        </div>
        <div>
          {errors.phoneNumber?.type === "required" && (
            <span>this need to be fill</span>
          )}
        </div>
        <div>
          {errors.phoneNumber?.type === "maxLength" && (
            <span>Indonesian phone number max length is 12 digit</span>
          )}
        </div>
        <div>
          {errors.phoneNumber?.type === "pattern" && (
            <span>You are only allowed to use number</span>
          )}
        </div>
        <input type="submit" />
      </form>
      <Link to="/">Home</Link>
    </div>
  );
}

export default CheckoutForm;
