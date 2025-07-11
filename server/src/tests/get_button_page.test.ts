
import { describe, expect, it } from 'bun:test';
import { getButtonPage } from '../handlers/get_button_page';

describe('getButtonPage', () => {
  it('should return valid HTML and title', async () => {
    const result = await getButtonPage();

    expect(result.html).toBeDefined();
    expect(result.title).toBeDefined();
    expect(typeof result.html).toBe('string');
    expect(typeof result.title).toBe('string');
  });

  it('should return correct title', async () => {
    const result = await getButtonPage();

    expect(result.title).toEqual('Red Button Page');
  });

  it('should return HTML with DOCTYPE declaration', async () => {
    const result = await getButtonPage();

    expect(result.html).toContain('<!DOCTYPE html>');
  });

  it('should include a red button in the HTML', async () => {
    const result = await getButtonPage();

    expect(result.html).toContain('<button');
    expect(result.html).toContain('red-button');
    expect(result.html).toContain('background-color: #ff0000');
  });

  it('should include proper CSS styling', async () => {
    const result = await getButtonPage();

    expect(result.html).toContain('<style>');
    expect(result.html).toContain('display: flex');
    expect(result.html).toContain('justify-content: center');
    expect(result.html).toContain('align-items: center');
    expect(result.html).toContain('min-height: 100vh');
  });

  it('should include hover and active states', async () => {
    const result = await getButtonPage();

    expect(result.html).toContain(':hover');
    expect(result.html).toContain(':active');
    expect(result.html).toContain('#cc0000');
    expect(result.html).toContain('#990000');
  });

  it('should include click functionality', async () => {
    const result = await getButtonPage();

    expect(result.html).toContain('onclick');
    expect(result.html).toContain('alert');
  });
});
