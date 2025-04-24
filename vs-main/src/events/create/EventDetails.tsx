'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import { Button } from 'src/components/ui/button';
import { Textarea } from 'src/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from 'src/components/ui/select';
import { Switch } from 'src/components/ui/switch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateTime } from 'luxon';

import { VirtuosoEvents } from 'services/types/generated';
import {
  EventDetailsFormInputs,
  eventDetailsSchema,
} from 'src/validators/event.validator';
import { Input } from 'src/components/ui/input';
import TimezonePicker from 'src/components/custom/timezone-picker';

export const EVENT_CATEGORIES: string[] = [
  'Music',
  'Sports',
  'Expos',
  'Performance',
  'Movies',
  'Education',
  'Social',
  'Cities',
  'Workplace',
];

function parseTimestamp(value?: number | string | null): number | null {
  if (!value) return null;
  if (typeof value === 'number' && !isNaN(value)) return value;
  if (typeof value === 'string') {
    const num = parseInt(value, 10);
    if (!isNaN(num)) return num;
  }
  return null;
}

function getDefaultEventValues(
  event: VirtuosoEvents | undefined,
  existingData: Partial<EventDetailsFormInputs>,
  defaultTz: string
): EventDetailsFormInputs {
  return {
    EventName: existingData.EventName ?? event?.EventName ?? '',
    StartTime: parseTimestamp(existingData.StartTime ?? event?.StartTime)!,
    EndTime: parseTimestamp(existingData.EndTime ?? event?.EndTime)!,
    isRealEvent: existingData.isRealEvent ?? event?.isRealEvent ?? false,
    RealTicketLink: existingData.RealTicketLink ?? event?.RealTicketLink ?? '',
    EventDescription:
      existingData.EventDescription ?? event?.EventDescription ?? '',
    Price: existingData.Price ?? event?.Price ?? '',
    EventCategory:
      existingData.EventCategory ?? event?.EventCategory ?? EVENT_CATEGORIES[0],
    isVipEntryAllowed:
      existingData.isVipEntryAllowed ?? event?.isVipEntryAllowed ?? false,
    vipPrice: existingData.vipPrice ?? event?.vipPrice ?? '',
    showCreator: existingData.showCreator ?? event?.showCreator ?? true,
    showOrganizer: existingData.showOrganizer ?? event?.showOrganizer ?? true,
    timezone: existingData.timezone ?? (event as any)?.timezone ?? defaultTz,
  };
}

interface IEventDetailsProps {
  event?: VirtuosoEvents;
  existingData: Partial<EventDetailsFormInputs>;
  handleSetStep: (i: number) => void;
  handleSetData: (data: EventDetailsFormInputs) => void;
}

export default function EventDetails({
  event,
  existingData,
  handleSetStep,
  handleSetData,
}: IEventDetailsProps) {
  const defaultTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const defaultValues = getDefaultEventValues(event, existingData, defaultTz);

  const form = useForm<EventDetailsFormInputs>({
    resolver: zodResolver(eventDetailsSchema),
    defaultValues,
    mode: 'onChange',
  });

  const watchStartTime = form.watch('StartTime');
  const watchIsVip = form.watch('isVipEntryAllowed');
  const watchIsRealEvent = form.watch('isRealEvent');
  const watchTimezone = form.watch('timezone');

  const onSubmit: SubmitHandler<EventDetailsFormInputs> = (values) => {
    handleSetData({
      ...values,
      Price: values.Price?.toString() ?? '',
    });
    handleSetStep(1);
  };

  return (
    <div className="pt-4 pb-20 md:pt-6">
      <Form {...form}>
        <form
          className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* EVENT NAME */}
          <FormField
            control={form.control}
            name="EventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EVENT NAME</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. Red Rocks" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* START / END / TIMEZONE */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* START */}
            <FormField
              control={form.control}
              name="StartTime"
              render={({ field }) => {
                const displayStart = field.value
                  ? DateTime.fromMillis(field.value)
                      .setZone(watchTimezone)
                      .toJSDate()
                  : null;
                return (
                  <FormItem>
                    <FormLabel>START (DATE & TIME)</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={displayStart}
                        onChange={(d) => {
                          if (!d) return field.onChange(null);
                          const utcMillis = DateTime.fromJSDate(d, {
                            zone: watchTimezone,
                          })
                            .toUTC()
                            .toMillis();
                          field.onChange(utcMillis);
                        }}
                        showTimeSelect
                        dateFormat="MMM d, yyyy HH:mm"
                        minDate={new Date()}
                        wrapperClassName="w-full"
                        openToDate={new Date()}
                        className="block w-full c-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {/* END */}
            <FormField
              control={form.control}
              name="EndTime"
              render={({ field }) => {
                const displayEnd = field.value
                  ? DateTime.fromMillis(field.value)
                      .setZone(watchTimezone)
                      .toJSDate()
                  : null;
                const minEnd = watchStartTime
                  ? DateTime.fromMillis(watchStartTime)
                      .setZone(watchTimezone)
                      .toJSDate()
                  : undefined;
                return (
                  <FormItem>
                    <FormLabel>END (DATE & TIME)</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={displayEnd}
                        onChange={(d) => {
                          if (!d) return field.onChange(null);
                          const utcMillis = DateTime.fromJSDate(d, {
                            zone: watchTimezone,
                          })
                            .toUTC()
                            .toMillis();
                          field.onChange(utcMillis);
                        }}
                        showTimeSelect
                        dateFormat="MMM d, yyyy HH:mm"
                        minDate={minEnd}
                        wrapperClassName="w-full"
                        openToDate={new Date()}
                        className="block w-full c-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {/* TIMEZONE */}
            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timezone</FormLabel>
                  <FormControl>
                    <TimezonePicker
                      defaultTz={defaultValues.timezone}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* DESCRIPTION */}
          <FormField
            control={form.control}
            name="EventDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe your event</FormLabel>
                <FormControl>
                  <Textarea {...field} className="h-40 resize-none md:h-72" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PRICE */}
          <FormField
            control={form.control}
            name="Price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PRICE</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="$20" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CATEGORY */}
          <FormField
            control={form.control}
            name="EventCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {EVENT_CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SHOW CREATOR / ORGANIZER */}
          <div className="flex gap-6">
            <FormField
              control={form.control}
              name="showCreator"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0 text-sm">
                    Show Creator Page Details
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="showOrganizer"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0 text-sm">
                    Show Organizer Details
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          {/* VIP */}
          <FormField
            control={form.control}
            name="isVipEntryAllowed"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0 text-sm">
                  Is VIP Entry Allowed?
                </FormLabel>
              </FormItem>
            )}
          />
          {watchIsVip && (
            <FormField
              control={form.control}
              name="vipPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>VIP PRICE</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="$20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* REAL EVENT */}
          <FormField
            control={form.control}
            name="isRealEvent"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0 text-sm">Is Real Event?</FormLabel>
              </FormItem>
            )}
          />
          {watchIsRealEvent && (
            <FormField
              control={form.control}
              name="RealTicketLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>REAL TICKET LINK</FormLabel>
                  <FormControl>
                    <Input type="url" placeholder="https://" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* SUBMIT */}
          <div className="flex justify-end mt-4">
            <Button type="submit" variant="default">
              Confirm &amp; Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
