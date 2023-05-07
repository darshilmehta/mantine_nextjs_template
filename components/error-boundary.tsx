import React, { Component, ErrorInfo, ReactNode } from 'react';
import ServerError from './errors/ServerError';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../types/types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ServerError /> : children;
  }
}

export default ErrorBoundary;
