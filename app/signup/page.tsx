import Link from "next/link";
import { Leaf } from "lucide-react";
export default function Signup() {
  return (
    <div className="auth-wrap">
      <div className="auth-art">
        <span>🌼</span>
        <p>
          Make yourself
          <br />
          <em>at home.</em>
        </p>
        <small>Join the good things club.</small>
      </div>
      <form
        className="auth-form"
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   alert(
        //     "Demo account created. Connect an auth provider to enable sign-up.",
        //   );
        // }}
      >
        <span className="eyebrow">JOIN THE GOOD THINGS CLUB</span>
        <h1>Let's make it official.</h1>
        <p>Create an account for a more personal shopping experience.</p>
        <label>
          Your name
          <input required placeholder="Alex Morgan" />
        </label>
        <label>
          Email address
          <input type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input
            type="password"
            required
            minLength={8}
            placeholder="At least 8 characters"
          />
        </label>
        <label className="check-label">
          <input type="checkbox" required /> I'm happy to receive occasional
          good things by email.
        </label>
        <button className="btn btn-dark full-btn">
          Create my account <Leaf size={16} />
        </button>
        <p className="auth-switch">
          Already a member? <Link href="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}
