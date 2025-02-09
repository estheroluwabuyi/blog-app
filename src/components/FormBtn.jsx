function FormBtn({ children, loading }) {
  return (
    <button type="submit" className="form-btn" disabled={loading}>
      {/* Start Reading */}
      {children}
    </button>
  );
}

export default FormBtn;
