import CustomUploadAdapter, {
  ImageUploadCancelHandler,
  ImageUploadHandler,
} from '@admin/utils/ckeditor/CustomUploadAdapter';
import { Editor } from 'explore-education-statistics-ckeditor';

export default function customUploadAdapterPlugin(
  onUpload: ImageUploadHandler,
  onCancel?: ImageUploadCancelHandler,
  onDestroy?: () => void,
) {
  return class CustomUploadAdapterPlugin {
    constructor(editor: Editor) {
      const fileRepository = editor.plugins.get('FileRepository');

      fileRepository.createUploadAdapter = loader => {
        return new CustomUploadAdapter(loader, onUpload, onCancel, onDestroy);
      };
    }
  };
}
