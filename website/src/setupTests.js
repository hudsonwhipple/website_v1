// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

class MockIntersectionObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe(el) {
    this.cb([{ isIntersecting: true, target: el }], this);
  }
  disconnect() {}
  unobserve() {}
}
global.IntersectionObserver = MockIntersectionObserver;

global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe(el) {
    this.cb([{ contentRect: { width: 1024, height: 768 }, target: el }], this);
  }
  disconnect() {}
  unobserve() {}
};

jest.mock('@paper-design/shaders-react', () => ({
  MeshGradient: () => null,
  DotOrbit: () => null,
}));
