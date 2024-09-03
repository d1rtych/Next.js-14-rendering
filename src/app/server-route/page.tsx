import { serverSideFunction } from '@/utils/server-utils';
import { ImageSlider } from '@/components/ImageSlider';

export default function ServerRoutePage() {
  console.log('Server Route Rendered');
  const result = serverSideFunction();

  return (
    <div>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider/>
    </div>
  );
}
