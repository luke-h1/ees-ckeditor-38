import { FileLoader, UploadAdapter } from '@ckeditor/ckeditor5-upload';

export interface ImageUploadResult {
  /**
   * The default url for the image that
   * was uploaded to the server.
   */
  default: string;

  /**
   * Additional urls can be added for different
   * image sizes. This allows us to show more appropriately
   * sized images for the user's screen size.
   *
   * Ideally, we should resize images to multiple
   * sizes for an optimized user experience.
   */
  [size: string]: string;
}

export type ImageProgressHandler = (current: number, total: number) => void;

export type ImageUploadHandler = (
  file: File,
  updateProgress: ImageProgressHandler,
) => Promise<ImageUploadResult>;

export type ImageUploadCancelHandler = () => void;

export default class CustomUploadAdapter implements UploadAdapter {
  private request?: Promise<ImageUploadResult>;

  constructor(
    private readonly loader: FileLoader,
    private readonly onUpload: ImageUploadHandler,
    private readonly onCancel?: ImageUploadCancelHandler,
    private readonly onDestroy?: () => void,
  ) {}

  async upload(): Promise<ImageUploadResult> {
    const file = (await this.loader.file) as File;

    this.request = this.onUpload(file, this.handleProgress);

    return this.request;
  }

  abort(): void {
    this.onCancel?.();
  }

  destroy(): void {
    this.onDestroy?.();
  }

  private handleProgress: ImageProgressHandler = (current, total) => {
    this.loader.uploaded = current;
    this.loader.uploadTotal = total;
  };
}
