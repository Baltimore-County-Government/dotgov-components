import React, { useRef, useState, useEffect } from 'react';

const componentToHex = (c) => {
	var hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
};

/* https://stackoverflow.com/a/51137753/1143670 */
const getRgbaBackgroundColor = (targetElement) =>
	window.getComputedStyle
		? window.getComputedStyle(targetElement, null).getPropertyValue('background-color')
		: targetElement.style.backgroundColor;

const rgbaToArray = (rgbStr) => rgbStr.replace('rgb(', '').replace(')', '').split(',').map((item) => parseInt(item));

const rgbToHex = (rgbStr) => {
	const [ r, g, b ] = rgbaToArray(rgbStr);
	return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const colorItemStyle = {
	height: '100px',
	width: '100px',
	borderRadius: '50%',
	marginBottom: '7.5px'
};

const bodyTextStyle = { fontWeight: '900', lineHeight: '1.4' };

const Color = (props) => {
	const { name, shouldAddBorder } = props;
	const shades = [ 'lightest', 'light', '', 'dark', 'darkest' ];
	const shadeReferences = Array.from({ length: shades.length }, () => useRef(null));
	const [ shadeHexes, setShadeHexes ] = useState({});
	const colorStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '30px',
		padding: '15px',
		borderBottom: shouldAddBorder ? '1px solid lightgray' : 'none'
	};

	useEffect(() => {
		const newShadeHexes = { ...shadeHexes };
		shadeReferences.forEach((shadeRef) => {
			const { current: ref } = shadeRef;
			const rgbaBackground = getRgbaBackgroundColor(ref);
			const hex = rgbToHex(rgbaBackground);
			const shade = ref.getAttribute('data-shade');

			newShadeHexes[shade] = hex.toUpperCase();
		});
		setShadeHexes(newShadeHexes);
	}, []);

	return (
		<div>
			<h3 style={{ marginBottom: '10px', fontWeight: '900', fontSize: '22px' }}>{props.name}</h3>
			<div style={colorStyle}>
				{shades.map((shadeName, shadeIndex) => {
					const shade = shadeName || 'brand';
					return (
						<div style={{ textAlign: 'center' }}>
							<div
								className={`dg_bg-${name}${shadeName ? `--${shadeName}` : ''}`}
								style={colorItemStyle}
								data-shade={shade}
								ref={shadeReferences[shadeIndex]}
							/>
							<p style={bodyTextStyle}>{shade}</p>
							<p style={bodyTextStyle}>{shadeHexes[shade]}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const ColorsExample = (props) => {
	const colors = [ 'gold', 'red', 'blue', 'pale-blue', 'gray' ];
	return (
		<React.Fragment>
			{colors.map((color, colorIndex) => (
				<Color key={color} name={color} shouldAddBorder={colorIndex < colors.length - 1} />
			))}
		</React.Fragment>
	);
};

export default ColorsExample;
