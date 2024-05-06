import { Image, ImageScreen } from '../ImageScreen';
import { logo } from '../../media';

export const TitleScreen = () => {
	return (
		<ImageScreen>
			<Image key="logo" ImgKey="logo" src={logo} />
		</ImageScreen>
	);
};
