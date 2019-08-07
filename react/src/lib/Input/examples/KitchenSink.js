import React from 'react';
import { Icon, Input, SearchInput } from '@momentum-ui/react';

export default class InputKitchenSink extends React.PureComponent {
  render() {
    const inputs = value => (
      <React.Fragment>
        <Input
          name={`inputSuccess${value}`}
          label="Success"
          htmlId={`inputSuccess${value}`}
          inputSize="small-12"
          value="Error Text"
          messageArr={[{ 
            message: `This is where the success message would be. 
              This is where the success message would be. 
              This is where the success message would be. 
              This is where the success message would be. 
              This is where the success message would be.`, 
            type: 'success' 
          }]}
        />
        <Input
          name={`inputError${value}`}
          label="Error"
          htmlId={`inputError${value}`}
          inputSize="small-12"
          value="Error Text"
          messageArr={[{ message: 'This is where the error message would be.', type: 'error' }]}
        />
        <Input
          name={`inputWarning${value}`}
          label="Warning"
          htmlId={`inputWarning${value}`}
          inputSize="small-12"
          value="Warning Text"
          messageArr={[
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
          ]}
        />
        <Input
          name={`inputDoubleWarning${value}`}
          label="Double Warning"
          htmlId={`inputDoubleWarning${value}`}
          inputSize="small-12"
          value="Double Warning Text"
          messageArr={[
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
            {
              message: 'This is where the warning message would be.',
              type: 'warning',
            },
          ]}
        />
        <Input
          name={`default${value}`}
          label="Default"
          htmlId={`default${value}`}
          inputSize="small-12"
        />
        <Input
          name={`default${value}`}
          label="Default"
          htmlId={`default${value}`}
          inputSize="small-12"
          shape="pill"
        />
        <Input
          name={`Multiline${value}`}
          label="Multiline"
          htmlId={`Multiline${value}`}
          inputSize="small-12"
          multiline
        />
        <Input
          name={`nested${value}`}
          label="Nested 1"
          htmlId={`nested${value}`}
          inputSize="small-12"
          nestedLevel={1}
        />
        <Input
          name={`nested2${value}`}
          label="Nested 2"
          htmlId={`nested2${value}`}
          inputSize="small-12"
          nestedLevel={2}
        />
        <Input
          name={`nested3${value}`}
          label="Nested 3"
          htmlId={`nested3${value}`}
          inputSize="small-12"
          nestedLevel={3}
        />
        <Input
          name={`readOnly${value}`}
          label="Read Only"
          htmlId={`readOnly${value}`}
          inputSize="small-12"
          value="With Placeholder"
          readOnly
        />
        <Input
          name={`disabled${value}`}
          label="Disabled"
          htmlId={`disabled${value}`}
          inputSize="small-12"
          placeholder="With Placeholder"
          disabled
        />
        <Input
          name={`disabledWithValue${value}`}
          label="Disabled Value"
          htmlId={`disabledWithValue${value}`}
          inputSize="small-12"
          value="With Value"
          disabled
        />
        <Input
          name={`disabledro${value}`}
          label="Disabled Read Only"
          htmlId={`disabledro${value}`}
          inputSize="small-12"
          value="Disabled ReadOnly Input"
          disabled
          readOnly
        />
        <Input
          name={`placeholder${value}`}
          label="Placeholder"
          htmlId={`placeholder${value}`}
          inputSize="small-12"
          placeholder="With Placeholder"
        />
        <Input
          name={`clearInput${value}`}
          label="Clear"
          htmlId={`clearInput${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          clear
        />
        <Input
          name={`rightIcon${value}`}
          label="Right Icon"
          htmlId={`rightIcon${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputAfter={<Icon name="accessibility_16" />}
        />
        <Input
          name={`leftIcon${value}`}
          label="Left Icon"
          htmlId={`leftIcon${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
        />
        <Input
          name={`leftIconDisabled${value}`}
          label="Left Icon Disabled"
          htmlId={`leftIconDisabled${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          disabled
        />
        <Input
          name={`clearLeftIcon${value}`}
          label="Clear and Left Icon"
          htmlId={`clearLeftIcon${value}`}
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          clear
        />
        <Input
          name={`help${value}`}
          label="Help Text"
          htmlId={`help${value}`}
          inputSize="small-12"
          placeholder="With Placeholder"
          inputHelpText="Help Text"
        />
        <Input
          name={`inputSecondaryLabel${value}`}
          label="Secondary Label"
          htmlId={`inputSecondaryLabel${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
        />
        <Input
          name={`inputDisabledSecondaryLabel${value}`}
          label="Disabled Secondary Label"
          htmlId={`inputDisabledSecondaryLabel${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          disabled
        />
        <Input
          name={`inputSecondaryHelpLabel${value}`}
          label="Secondary/Help Label"
          htmlId={`inputSecondaryHelpLabel${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
        />
        <Input
          name={`inputSecondaryHelpLabelDisabled${value}`}
          label="Disabled Secondary/Help Label"
          htmlId={`inputSecondaryHelpLabelDisabled${value}`}
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
          disabled
        />
        <Input
          name={`Filldefault${value}`}
          label="Filled"
          htmlId={`Filldefault${value}`}
          isFilled
          inputSize="small-12"
        />
        <Input
          name={`FillreadOnly${value}`}
          label="Filled Read Only"
          htmlId={`FillreadOnly${value}`}
          isFilled
          inputSize="small-12"
          value="With Placeholder"
          readOnly
        />
        <Input
          name={`Filldisabled${value}`}
          label="Filled Disabled"
          htmlId={`Filldisabled${value}`}
          isFilled
          inputSize="small-12"
          placeholder="With Placeholder"
          disabled
        />
        <Input
          name={`Filldisabledro${value}`}
          label="Filled Disabled Read Only"
          htmlId={`Filldisabledro${value}`}
          inputSize="small-12"
          isFilled
          value="Disabled ReadOnly Input"
          disabled
          readOnly
        />
        <Input
          name={`Fillplaceholder${value}`}
          label="Filled Placeholder"
          htmlId={`Fillplaceholder${value}`}
          isFilled
          inputSize="small-12"
          placeholder="With Placeholder"
        />
        <Input
          name={`FillclearInput${value}`}
          label="Filled Clear"
          htmlId={`FillclearInput${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          clear
        />
        <Input
          name={`FillrightIcon${value}`}
          label="Filled Right Icon"
          htmlId={`FillrightIcon${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputAfter={<Icon name="accessibility_16" />}
        />
        <Input
          name={`FillleftIcon${value}`}
          label="Filled Left Icon"
          htmlId={`FillleftIcon${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
        />
        <Input
          name={`FillclearLeftIcon${value}`}
          label="Filled Clear and Left Icon"
          htmlId={`FillclearLeftIcon${value}`}
          isFilled
          inputSize="small-12"
          placeholder="Placeholder Text"
          inputBefore={<Icon name="accessibility_16" />}
          clear
        />
        <Input
          name={`Fillhelp${value}`}
          label="Filled Help Text"
          htmlId={`Fillhelp${value}`}
          isFilled
          inputSize="small-12"
          placeholder="With Placeholder"
          inputHelpText="Help Text"
        />
        <Input
          name={`FillinputSecondaryLabel${value}`}
          label="Filled Secondary Label"
          htmlId={`FillinputSecondaryLabel${value}`}
          isFilled
          inputSize="small-12"
          secondaryLabel="Secondary Label"
        />
        <Input
          name={`FillinputSecondaryHelpLabel${value}`}
          label="Filled Secondary/Help Label"
          htmlId={`FillinputSecondaryHelpLabel${value}`}
          isFilled
          inputSize="small-12"
          secondaryLabel="Secondary Label"
          inputHelpText="Help Text"
        />
        <SearchInput
          name={`defaultSearchInput${value}`}
          htmlId={`defaultSearchInput${value}`}
          inputSize="small-12"
          label="Default Search"
        />
        <SearchInput
          name={`loadingSearchInput${value}`}
          htmlId={`loadingSearchInput${value}`}
          inputSize="small-12"
          label="Loading Search"
          isLoading
        />
        <SearchInput
          name={`searchclear${value}`}
          htmlId={`searchclear${value}`}
          inputSize="small-12"
          label="Search with Clear"
          clear
        />
        <SearchInput
          name={`searchpill${value}`}
          htmlId={`searchpill${value}`}
          inputSize="small-12"
          shape="pill"
          clear
        />
        <SearchInput
          name={`defaultSearchInputFilled${value}`}
          htmlId={`defaultSearchInputFilled${value}`}
          inputSize="small-12"
          label="Search Filled"
          isFilled
        />
        <SearchInput
          name={`filledLoadingSearchInput${value}`}
          htmlId={`filledLoadingSearchInput${value}`}
          inputSize="small-12"
          label="Loading Filled Search"
          isFilled
          isLoading
        />
        <SearchInput
          name={`searchclearFilled${value}`}
          htmlId={`searchclearFilled${value}`}
          inputSize="small-12"
          label="Search with Clear Filled"
          clear
          isFilled
        />
        <SearchInput
          name={`searchpillFilled${value}`}
          htmlId={`searchpillFilled${value}`}
          inputSize="small-12"
          label="Search Pill Filled"
          shape="pill"
          clear
          isFilled
        />
      </React.Fragment>
    );
    return (
      <div>
        <div style={{ overflow: 'auto' }}>{inputs(1)}</div>
        <div className="md--dark rows" style={{ backgroundColor: 'black', overflow: 'auto' }}>
          {inputs(2)}
        </div>
        <div className="md--contrast">
          <div className="rows" style={{ overflow: 'auto' }}>
            {inputs(3)}
          </div>
          <div className="md--dark rows" style={{ backgroundColor: 'black', overflow: 'auto' }}>
            {inputs(4)}
          </div>
        </div>
      </div>
    );
  }
}