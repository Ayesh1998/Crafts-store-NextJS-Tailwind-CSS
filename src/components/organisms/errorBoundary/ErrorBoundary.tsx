import React, { Component, ErrorInfo, ReactNode } from "react";

import Router from "next/router";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <div className="flex h-screen flex-col items-center justify-center text-red-500">
            <p className="text-xl">
              An error has occurred. Please try again later.
            </p>
            <div className="mt-5 flex gap-x-5 text-primary-text-500">
              <button
                className="hover:text-primary-text-800 transition-all"
                type="button"
                onClick={() => this.setState({ hasError: false })}
              >
                Try again?
              </button>
              <button
                className="hover:text-primary-text-800 transition-all"
                type="button"
                onClick={() => {
                  this.setState({ hasError: false });
                  Router.push("/")
                }}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
