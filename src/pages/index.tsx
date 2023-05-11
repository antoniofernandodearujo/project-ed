//routes
import Router from "../routes/Routes";

export default function Home() {
  if (typeof document !== "undefined") {
    return (
      <Router />
    )
  } else {
    return null;
  }
}
