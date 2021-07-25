import OverviewFlow from "./Flow/OverviewFlow";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ fontWeight: "bold", fontSize: "xxx-large" }}>Okta</div>
        <div style={{ fontWeight: "bold", fontSize: "xxx-large" }}>
          Office 365
        </div>
      </div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          width: "100%",
          height: "100vh",
          // alignItems: "center",
          // justifyContent: "center",
          // paddingTop: "10px",
          // backgroundColor: "#f2f3f4",
        }}
      >
        <OverviewFlow />
      </div>
    </>
  );
}

export default App;
