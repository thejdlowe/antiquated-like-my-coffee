import { Image, ImageScreen } from '../ImageScreen';
import { logo } from '../../images';

export const TitleScreen = () => {
	return (
		<ImageScreen>
			<Image key="logo" ImgKey="logo" src={logo} />
		</ImageScreen>
	);
};
