export const UiCalendar = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};
