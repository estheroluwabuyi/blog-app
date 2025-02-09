function FormBtn({ children, loading }) {
  return (
    <button type="submit" className="form-btn" disabled={loading}>
      {children}
    </button>
  );
}

export default FormBtn;
