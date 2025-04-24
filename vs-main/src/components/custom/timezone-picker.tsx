'use client';

import * as React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from 'src/components/ui/popover';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from 'src/components/ui/command';
import { Button } from 'src/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface TimezoneOption {
  value: string;
  label: string;
}

interface TimezoneSelectorProps {
  defaultTz: string;
  value: string;
  onChange: (tz: string) => void;
}

export default function TimezonePicker({
  value,
  onChange,
  defaultTz,
}: TimezoneSelectorProps) {
  const tzOptions = React.useMemo<TimezoneOption[]>(() => {
    if (typeof Intl === 'undefined' || !Intl.supportedValuesOf) {
      return [{ value: 'UTC', label: 'UTC' }];
    }
    return Intl.supportedValuesOf('timeZone').map((tz: string) => {
      const parts = new Date()
        .toLocaleString('en-US', {
          timeZone: tz,
          timeZoneName: 'short',
        })
        .split(' ');
      const gmt = parts.pop() || '';
      const offset = gmt.replace('GMT', 'UTC');
      return { value: tz, label: `${tz} (${offset})` };
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  const filtered = React.useMemo(() => {
    if (!query) return tzOptions;
    return tzOptions.filter((tz) =>
      tz.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, tzOptions]);

  const selectedLabel = React.useMemo(() => {
    const found = tzOptions.find((tz) => tz.value === (value || defaultTz));
    return found ? found.label : 'Select timezone';
  }, [value, tzOptions, defaultTz]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full bg-popover"
        >
          {selectedLabel}
          <ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 c-scrollbar">
        <Command>
          <CommandInput
            placeholder="Search timezone..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No timezones found.</CommandEmpty>
            <CommandGroup>
              {filtered.map((tz) => (
                <CommandItem
                  key={tz.value}
                  onSelect={() => {
                    onChange(tz.value);
                    setOpen(false);
                    setQuery('');
                  }}
                >
                  {tz.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
