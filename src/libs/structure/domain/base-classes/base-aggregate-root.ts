import { BaseDomainEvent } from '@libs/structure/domain/base-classes/base-domain-event';
import { BaseEntity } from '@libs/structure/domain/base-classes/base-entity';
import { DomainEventsPubSub } from '@libs/structure/domain/pubsub/domain-events.pubsub';

export abstract class BaseAggregateRoot<
  EntityProps,
> extends BaseEntity<EntityProps> {
  private _domainEvents: BaseDomainEvent[] = [];

  get domainEvents() {
    return this._domainEvents;
  }

  protected addEvent(domainEvent: BaseDomainEvent): void {
    this._domainEvents.push(domainEvent);
    DomainEventsPubSub.prepareForPublish(this);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }
}
